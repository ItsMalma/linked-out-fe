import * as v from "valibot";

export const forgotPasswordFormSchema = v.object({
  email: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(100, "Maksimal 255 karakter"),
    v.email("Format email salah")
  ),
  kataSandi: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.minLength(8, "Minimal 8 karakter")
  ),
});

export type ForgotPasswordInput = v.InferInput<typeof forgotPasswordFormSchema>;

export function forgotPassword(
  input: ForgotPasswordInput,
  cb: (success: boolean) => void
) {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/users/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  })
    .then((res) => {
      console.log(res);
      cb(res.status === 200);
    })
    .catch((err) => {
      console.error(err);
      cb(false);
    });
}
