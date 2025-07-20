import { render, screen, cleanup } from '@testing-library/react';
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <PublicRoute/>', () => { 
    test('debe de mostar el children si no esta autenticado', () => { 
        
        const contextValue ={
            logged: false
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute />
            </AuthContext.Provider>
        )
     });

 });