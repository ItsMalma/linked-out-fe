import * as v from "valibot";
import { isMobilePhone } from "validator";

export const registerFormSchema = v.object({
  nik: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.minLength(15, "Minimal 15 karakter"),
    v.maxLength(16, "Maksimal 16 karakter")
  ),
  namaDepan: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(100, "Maksimal 100 karakter")
  ),
  namaBelakang: v.nullable(
    v.pipe(
      v.string("Format tidak valid"),
      v.maxLength(100, "Maksimal 100 karakter")
    )
  ),
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
  lokasi: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.maxLength(200, "Maksimal 200 karakter")
  ),
  nomorWhatsApp: v.pipe(
    v.string("Format tidak valid"),
    v.minLength(1, "Tidak boleh kosong"),
    v.check(isMobilePhone, "Format nomor whatsapp salah")
  ),
});

export type RegisterInput = v.InferInput<typeof registerFormSchema>;

export async function register(
  input: RegisterInput,
  cb: (success: boolean) => void
) {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      cb(res.status === 201);
    })
    .catch((err) => {
      console.error(err);
      cb(false);
    });
}
