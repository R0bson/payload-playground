/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string;
  role: 'user' | 'admin' | 'editor' | 'developer';
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  name?: string;
  alt?: string;
  blurhash?: string;
  webp: {
    filename?: string;
    filesize?: number;
    width?: number;
    mimeType?: string;
    height?: number;
    url?: string;
    sizes: {
      thumbnail: {
        filename?: string;
        filesize?: number;
        width?: number;
        mimeType?: string;
        height?: number;
        url?: string;
      };
      card: {
        filename?: string;
        filesize?: number;
        width?: number;
        mimeType?: string;
        height?: number;
        url?: string;
      };
      wide_smartphone_xs: {
        filename?: string;
        filesize?: number;
        width?: number;
        mimeType?: string;
        height?: number;
        url?: string;
      };
      wide_smartphone: {
        filename?: string;
        filesize?: number;
        width?: number;
        mimeType?: string;
        height?: number;
        url?: string;
      };
      wide_tablet: {
        filename?: string;
        filesize?: number;
        width?: number;
        mimeType?: string;
        height?: number;
        url?: string;
      };
      wide_desktop: {
        filename?: string;
        filesize?: number;
        width?: number;
        mimeType?: string;
        height?: number;
        url?: string;
      };
    };
  };
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    wide_smartphone_xs: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    wide_smartphone: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    wide_tablet: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    wide_desktop: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "companies".
 */
export interface Company {
  id: string;
  name?: string;
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "examples".
 */
export interface Example {
  id: string;
  someField?: string;
  slider: {
    some_meta?: string;
    title?: string;
    image: string | Media;
    caption?: string;
    id?: string;
  }[];
  layout: {
    quoteHeader: string;
    quoteText?: string;
    id?: string;
    blockName?: string;
    blockType: 'Quote';
  }[];
  enableCoolStuff?: boolean;
  trackingCode: string;
  customerJSON: {
    [k: string]: unknown;
  };
  title: string;
  someTextField: string;
  contact: string;
  pageMeta: {
    title: string;
    description: string;
  };
  age: number;
  /**
   * @minItems 2
   * @maxItems 2
   */
  location?: [number, number];
  color?: 'mint' | 'dark_gray';
  owner?:
    | {
        value: string | User;
        relationTo: 'users';
      }
    | {
        value: string | Company;
        relationTo: 'companies';
      };
  content: {
    [k: string]: unknown;
  }[];
  label: string;
  value: string;
  selectedFeatures?: ('metallic_paint' | 'alloy_wheels' | 'carbon_fiber_dashboard')[];
  tabTwo?: {
    numberField: number;
  };
  pageTitle: string;
  metaDescription: string;
  createdAt: string;
  updatedAt: string;
}
