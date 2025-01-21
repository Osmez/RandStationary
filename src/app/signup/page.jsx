'use client'

import React,{ useActionState } from "react";
import {signup} from '../actions/auth';

export default function Signup(){
  const [state, action, pending] = useActionState(signup, undefined)
    return (
        <form action={signup}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Name" />
            {state?.errors?.name && <p>{state.errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" />
            {state?.errors?.email && <p>{state.errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
            {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
          </div>
          <button type="submit">Sign Up</button>
        </form>
    )
}