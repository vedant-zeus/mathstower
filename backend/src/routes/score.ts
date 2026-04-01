import express from 'express';
import Score from '../models/Score.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const { userId, username, score, towerHeight, timeTaken } = req.body;
    const newScore = new Score({ userId, username, score, towerHeight, timeTaken });
    await newScore.save();

    // Update user stats
    const user: any = await User.findById(userId);
    if (user && user.stats) {
      if (towerHeight > user.stats.highestTower) {
        user.stats.highestTower = towerHeight;
      }
      user.stats.totalScore += score;
      user.stats.gamesPlayed += 1;
      await user.save();
    }

    res.status(201).json({ message: 'Score submitted' });
  } catch (error) {
    res.status(500).json({ error: 'Score submission failed' });
  }
});

router.get('/leaderboard', async (req, res) => {
  try {
    const scores = await Score.find()
      .sort({ score: -1 })
      .limit(10);
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

export default router;
