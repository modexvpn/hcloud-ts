import { z } from "zod";

const labelKeyRegex =
/^(([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)*[a-z0-9]([-a-z0-9]*[a-z0-9])?\/)?[a-zA-Z0-9]([a-zA-Z0-9._-]{0,61}[a-zA-Z0-9])?$/;

const labelValueRegex =
/^([a-zA-Z0-9]([a-zA-Z0-9._-]{0,61}[a-zA-Z0-9])?)?$/;

export const labelSchema = z.record(
    z
    .string()
    .regex(labelKeyRegex, "Invalid label key")
    .refine((key) => !key.startsWith("hetzner.cloud/"), {
        message: "Keys with 'hetzner.cloud/' prefix are reserved",
    }),
    z.string().regex(labelValueRegex, "Invalid label value")
);

export type Label = z.infer<typeof labelSchema>;