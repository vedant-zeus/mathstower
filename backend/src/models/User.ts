import mongoose, { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  stats: {
    highestTower: number;
    totalScore: number;
    gamesPlayed: number;
  };
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  stats: {
    highestTower: { type: Number, default: 0 },
    totalScore: { type: Number, default: 0 },
    gamesPlayed: { type: Number, default: 0 }
  }
}, { timestamps: true });

const User = mongoose.models.User || model<IUser>('User', UserSchema);
export default User;
