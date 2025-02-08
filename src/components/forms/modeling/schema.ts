import { z } from "zod";

export const modelingFormSchema = z.object({
  imageSrc: z.string(),
  modelingModel: z.enum([
    "Trellis",
    "Tripo3D",
    "Hyper3D",
    "StableFast3D",
    "StablePoint3D",
  ]),
  modelingFormat: z.enum(["glb", "obj", "stl"]),
  modelingQuality: z.enum(["low", "medium", "high", "extra-low"]),
  useHyper: z.boolean(),
  modelingTier: z.enum(["Sketch", "Regular"]),
});

export type ModelingFormType = z.infer<typeof modelingFormSchema>;
