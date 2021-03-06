const INITIAL_STATE = {
  preset: {},
}

const InstrumentPresetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEND_SLOT_INFO":
      return {
        ...state,
        preset: {
          ...state.preset,
          [`${action.payload.instrument}${action.payload.number}`]: true,
        },
      }
    case "REMOVE_SLOT_INFO":
      let newPreset = state.preset
      delete newPreset[action.payload]
      return {
        ...state,
        preset: newPreset,
      }
    case "SET_PRESET":
      return action.payload
    default:
      return state
  }
}

export default InstrumentPresetReducer
