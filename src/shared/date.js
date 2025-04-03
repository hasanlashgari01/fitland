export const transformDateWithPersianMonth = (date) => new Date(date).toLocaleDateString("fa", { dateStyle: "medium" });

export const transformDate = (date) => {
  const dateFormat = new Date(date).toLocaleDateString("fa");
  const timeFormat = new Date(date).toLocaleTimeString("fa", { hourCycle: "h24" });

  const result = `${timeFormat} | ${dateFormat}`;

  return result;
};
