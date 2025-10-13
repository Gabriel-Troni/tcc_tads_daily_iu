import { Request, Response } from "express";

export class ExerciseController {
  static async setTrainingPlan(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setTrainingPlan' });
  }

  static async setTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setTraining' });
  }

  static async setExercise(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setExercise' });
  }

  static async completeTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'completeTraining' });
  }

  static async feedbackTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'feedbackTraining' });
  }

  static async addTrainingPlan(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addTrainingPlan' });
  }

  static async addTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addTraining' });
  }

  static async addExercise(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async getTrainingPlan(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'getTrainingPlan' });
  }
}
