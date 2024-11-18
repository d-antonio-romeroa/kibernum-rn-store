// store/auth/interfaces.ts

export interface RegisterProps {
    firstName: string,
    lastName: string,
    phone: string,
    password: string
  }
  
  export interface LoginProps {
    username: string,
    password: string
  }
  
  export interface AccessTokenProps {
    password: string,
    server: string,
    storage: string,
    username: string
  }
  
  export interface InitialStateProps {
    loading: boolean,
    error: string | null,
    user: string | null,
    success: boolean,
    accessToken: string | null,
    login: ({ username, password }: LoginProps) => void,
    resetStore: () => void,
    logout: () => void
  }
  