import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
});

export const persistor = persistStore(store);
