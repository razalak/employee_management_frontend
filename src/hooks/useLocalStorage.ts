type LocalStorageType = {
  get: (k: string) => string;
  set: (k: string, v: string) => void;
  remove: (k: string) => void;
};

const useLocalStorage = () => {
  const localStorage: LocalStorageType = {
    get: (k: string) => window.localStorage.getItem(k) ?? "",
    set: (k: string, v: string) => window.localStorage.setItem(k, v),
    remove: (k: string) => window.localStorage.removeItem(k),
  };

  return localStorage;
};

export default useLocalStorage;
