import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  img: z.string(),
  bio: z.string().max(150, {
    message: "Bio can only be 150 latter's Long!",
  }),
  gender: z.enum(["Male", "Female"]),
  dob: z
    .string()
    .min(10, {
      message: "Dob Formate Incorrect Please use this Formate : 01/01/2000",
    })
    .max(10, {
      message: "Dob Formate Incorrect Please use this Formate : 01/01/2000",
    })
    .regex(/^[0-9\/]*$/, "Only numbers and / characters are allowed."),
  facebook: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
});

export const editSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  img: z.string(),
  bio: z.string().max(150, {
    message: "Bio can only be 150 latter's Long!",
  }),
  gender: z.enum(["Male", "Female"]),
  dob: z
    .string()
    .min(10, {
      message: "Dob Formate Incorrect Please use this Formate : 01/01/2000",
    })
    .max(10, {
      message: "Dob Formate Incorrect Please use this Formate : 01/01/2000",
    })
    .regex(/^[0-9\/]*$/, "Only numbers and / characters are allowed."),
  facebook: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
});

export const blogSchema = z.object({
  title: z.string().min(15, {
    message: "Minimum of 15 Latter's are required to post a blog!",
  }),
  url: z.string(),
  keywords: z.string().max(190, {
    message: "Maximum of 190 Latter's are Allowed!",
  }),
  description: z.string().max(190, {
    message: "Maximum of 190 Latter's are Allowed!",
  }),
  category: z.string(),
  faq: z.string(),
});

const AdSchema = z.object({
  adId: z.string(),
  label: z.string(),
  sizeX: z.string(),
  sizeY: z.string(),
});

export const AllAdSchema = z.object({
  ads: z.array(AdSchema),
});
