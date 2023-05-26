import { redirect } from '@sveltejs/kit'

export const load = () => {
  throw redirect(
    302,
    'https://script.google.com/macros/s/AKfycbySTFJ7mSQ2gOktETpU1KplR05zVAq97iI8YpEwBvQZ45dk3w0rRsVzGJ3gnDMXM-tz/exec'
  )
}
