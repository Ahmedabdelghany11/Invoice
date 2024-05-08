export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function getPaymentDue(dateString, paymentTerms) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + paymentTerms);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function getTotalItemsPrice(items) {
  return items.reduce((item, acc) => acc + (item?.total || 0), 0);
}

export function checkAvailabiltyToAddItem(items) {
  let isAvailable = true;

  items.forEach((item) => {
    if (item.name === "") isAvailable = false
  })

  return isAvailable;
}