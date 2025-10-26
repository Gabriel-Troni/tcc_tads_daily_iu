import { Request, Response } from "express";

export class ExerciseController {
  static async addTrainingPlan(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addTrainingPlan' });
  }

  static async getAllTrainingPlans(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'getTrainingPlan' });
  }

  static async setTrainingPlan(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setTrainingPlan' });
  }

  static async deleteTrainingPlan(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' })
  }

  static async addExerciseCategory(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' })
  }

  static async getExerciseCategories(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' })
  } 

  static async setExerciseCategory(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' })
  }

  static async deleteExerciseCategory(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' })
  } 

  static async setTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setTraining' });
  }

  static async getExercises(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setExercise' });
  }

  static async setExercise(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setExercise' });
  }

  static async deleteExercise(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setExercise' });
  }

  static async completeTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'completeTraining' });
  }

  static async feedbackTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'feedbackTraining' });
  }


  static async addTraining(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addTraining' });
  }

  static async addExercise(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async getAttributes(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async addAttribute(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async setAttribute(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async deleteAttribute(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async addWorkout(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async getWorkouts(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }

  static async setWorkout(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }
  
  static async deleteWorkout(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'addExercise' });
  }
}
