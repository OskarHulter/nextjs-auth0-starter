import Router from 'next/router'

export function redirect() {
  Router.replace('/')
}

export function handleError(error, response) {
  console.error(error)
  response.status(error.status || 500).end(error.message)
}