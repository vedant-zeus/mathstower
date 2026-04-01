import mongoose, { Schema, model, Document } from 'mongoose';

export interface IScore extends Document {
  userId: mongoose.Types.ObjectId;
  username: string;
  score: number;
  towerHeight: number;
  timeTaken: number;
}

const ScoreSchema = new Schema<IScore>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  score: { type: Number, required: true },
  towerHeight: { type: Number, required: true },
  timeTaken: { type: Number, required: true }
}, { timestamps: true });

const Score = mongoose.models.Score || model<IScore>('Score', ScoreSchema);
export default Score;
