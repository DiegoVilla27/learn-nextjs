
export const useHttpClient = () => {
  const callEndpoint = async (axiosCall) => {
    let res = {};
    try {
      res = await axiosCall;
    } catch (err) {
      console.log('ERROR', err);
    }
    return res.data;
  };

  return {
    callEndpoint,
  };
};
