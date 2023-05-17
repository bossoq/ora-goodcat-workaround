import { redirect } from '@sveltejs/kit'

export const load = () => {
  throw redirect(
    302,
    'https://script.google.com/macros/s/AKfycbyQEYOdFP6JcEKcw19rNCOLdFQ2NjFh_QCB9g4ZTeU0bfMlWxMM1RMXf34f9NoixSSa/exec'
  )
}
