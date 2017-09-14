export default {
  error (service, errorCode, errorMsg) {
    const errorObj = {
      service,
      errorCode,
      errorMsg
    };
    return errorObj;
  }
};
