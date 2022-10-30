import { redirect } from '@sveltejs/kit'

export const load = () => {
  throw redirect(
    302,
    'https://script.google.com/macros/s/AKfycbwfCK1ItiGNPkrAsxSUUNlohlGurbN5KdsEDEGx5YfvaOefFSk5iOyeP8u69Nhob3Bb/exec'
  )
}
