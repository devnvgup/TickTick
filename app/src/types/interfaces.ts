
import { User } from 'firebase/auth';
import { ReactNode } from 'react';



export interface AuthValue {
    user: User| null;
    loading: boolean;
    logout: () => Promise<void>;
};

export interface AuthProps {
    children : ReactNode
}