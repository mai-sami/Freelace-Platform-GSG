export default function toTitleCase(str) {
  const titleCase = str?.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
    .join(' ').substr(0, 5);

  return titleCase;
}
export const Times = new Date().toLocaleTimeString('lv-LV', { hour: '2-digit', minute: '2-digit' })

export const current = new Date();
export const currentDate = current.toDateString()
const hours = current.getHours();
export const timeDay = hours >= 12 ? "Good Evening" : "Good Morning";
