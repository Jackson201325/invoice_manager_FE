export function validateRequest(response) {
  if (response.exception) {
    throw response.exception;
  }

  const result = response.result;
  if (result && result.err) {
    throw response.result.err;
  }

  if (result && result.success) {
    return result.success;
  }

  if (result) {
    return result;
  }

  // console.error(response);
  throw new Error('Unexpected response');
}
