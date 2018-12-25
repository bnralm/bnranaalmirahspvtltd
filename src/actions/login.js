export const loginUser = (login) => ({
    type: 'LOGIN_USER',
    login
  });

export const logoutUser = (logout) => ({
    type: 'LOGOUT_USER',
    logout
  });  
  
export const loginFormOpen = (modalSignIn) => ({
    type: 'MODAL_SIGNIN',
    modalSignIn
  });

export const loginFormClose = (modalClose) => ({
    type: 'MODAL_CLOSE',
    modalClose
  });

  