// import React from "react";
// import { createContext, useContext, useReducer } from "react";

// //CREATE CONTEXT
// export const DataLayerContext = createContext();

// //BUILD A PROVIDER

// export const DataLayer = ({ initialState, reducer, children }) => {
//   <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </DataLayerContext.Provider>;
// };

// //CONSUME A PROVIDER
// export const useDataLayerValue = () => useContext(DataLayerContext);
import React, { createContext, useContext, useReducer } from "react";
//CREATE CONTEXT
export const DataLayerContext = createContext();
//BUILD A PROVIDER
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);
//CONSUME A PROVIDER
export const useDataLayerValue = () => useContext(DataLayerContext);
