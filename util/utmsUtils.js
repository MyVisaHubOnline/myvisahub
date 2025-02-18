const acceptedUtmNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "msclkid",
];

const getUtmsFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const urlUtms = [];

  acceptedUtmNames.forEach((utm) => {
    const utmValue = params.get(utm);
    if (utmValue) urlUtms.push({ name: utm, value: utmValue });
  });

  return urlUtms.length > 0 ? urlUtms : null;
};

export const saveUtmsOnCookies = () => {
  const host = window.location.hostname;
  const domain = host.includes(".")
    ? "." + host.split(".").slice(-2).join(".")
    : host;
  const urlUtms = getUtmsFromUrl();

  urlUtms?.forEach(
    (utm) =>
      (document.cookie = `${utm.name}=${utm.value}; path=/; domain=${domain}`)
  );
};
