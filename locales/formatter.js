export function format(messages) {
  const results = {};
  for (const [id, message] of Object.entries(messages)) {
    results[id] = message.defaultMessage;
  }
  return results;
}
