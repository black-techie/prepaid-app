import React, { createContext, useReducer, useMemo, ReactNode } from 'react';

interface AuthProviderProps {
    children: ReactNode;
}

type AuthState = {
    isSignout: boolean;
    userToken: string | null;
};

type AuthAction =
    | { type: 'RESTORE_TOKEN'; token: string | null }
    | { type: 'SIGN_IN'; token: string }
    | { type: 'SIGN_OUT' };

type AuthContextType = {
    signIn: (token: string) => void;
    signOut: () => void;
    isAuthenticated: () => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(
        (prevState: AuthState, action: AuthAction) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isSignout: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isSignout: false,
            userToken: null,
        }
    );

    const authContextValue = useMemo(
        () => ({
            signIn: (token: string) => dispatch({ type: 'SIGN_IN', token }),
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            isAuthenticated: () => !state.isSignout && !!state.userToken,
        }),
        [state]
    );

    return (
        <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};