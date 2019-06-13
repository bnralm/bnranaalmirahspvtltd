import * as actionType from '../constants/constant.action';

export const requestRampupGallary = ( () => ({
    type: actionType.REQUEST_RAMPUP_GALLARY,
    isRamupClosed: false,
    isRamupOpen: true
}))

export const closeRampupGallary = ( () => ({
   type: actionType.CLOSE_RAMPUP_GALLARY,
   isRamupClosed: true,
   isRamupOpen: false
}))


