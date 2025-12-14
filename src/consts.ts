// Site configuration
// Import translations for dynamic content
import { i18n } from './i18n';

export const SITE_TITLE = i18n.site.title;
export const SITE_DESCRIPTION = i18n.site.description;
export const SITE_LOCALE = i18n.site.locale;

// Contact information (centralized)
export const CONTACT = {
  phone: i18n.contact.phone,
  fax: i18n.contact.fax,
  email: i18n.contact.email,
  address: i18n.contact.address,
  locationNumber: i18n.contact.locationNumber,
  providerNumber: i18n.contact.providerNumber,
};

// Location coordinates for map
export const LOCATION = {
  lat: 55.393807,
  lng: 10.384872,
  zoom: 16,
};
