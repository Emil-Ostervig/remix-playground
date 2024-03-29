/////
// This file is autogenerated!
/////

type UtilRequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface CleanupArgs {
  deleteWithoutIds?: boolean;
  deleteAllPages?: boolean;
}

export interface GetSchemaRelationsDto {
  schemaId?: string | null;
  syncSchemasToContentTypes?: boolean;
}

export interface Language {
  languageCode?: string | null;
  languageName?: string | null;
  isDefault?: boolean;
}

/**
 * M010HeroModule
 * Image with text
 */
export type M010HeroModule = (SimpleVideo & BaseModule) & {
  callToAction?: CallToAction;
  image?: LocalizedImage;
  /** Headline */
  headline: string;
  /** Sub headline */
  subHeadline?: string;
  /**
   * With gutter
   * If module has no gutter its background image will fill the entire screen width
   */
  hasGutter?: boolean;
  /** Vertical alignment of the content - Defaults to 'Top' */
  contentAlignVertical?: VerticalFull;
  /** Horizontal alignment of the content - Defaults to 'Left' */
  contentAlignHorizontal?: HorizontalFull;
  type: string;
};

/**
 * M020CategoriesModule
 * A carousel of category items
 */
export type M020CategoriesModule = BaseModule & {
  /** categories */
  categories: CategoryItem[];
  /** Headline */
  headline?: string;
  type: string;
};

/**
 * M021SpeciesList
 * A dynamic list of species
 */
export type M021SpeciesList = BaseModule & {
  /** Headline */
  headline?: string;
  type: string;
};

/**
 * M060UspModule
 */
export type M060UspModule = BaseModule & {
  /** USP List */
  uspList?: UspItem[];
  /** Headline */
  headline?: string;
  /** Subheadline */
  subHeadline?: string;
  type: string;
};

/**
 * M070ImageModule
 */
export type M070ImageModule = BaseModule & {
  /**
   * Headline
   * Headline directly above image
   */
  headline?: string;
  image: LocalizedImage;
  /**
   * Caption
   * Brief explanation or accompanying text shown beneath the image
   */
  caption?: string;
  type: string;
};

/**
 * Title
 */
export type M071VideoModule = (ExtendedVideo & VideoSettings & BaseModule) & {
  /**
   * Headline
   * Headline directly above video
   */
  headline?: string;
  /**
   * Caption
   * Brief explanation or accompanying text shown beneath the video
   */
  caption?: string;
  type: string;
};

/**
 * M075ImageAndTextModule
 */
export type M075ImageAndTextModule = (ExtendedVideo & VideoSettings & BaseModule) & {
  callToAction?: CallToAction;
  /** Headline */
  headline?: string;
  /** Rich Text */
  richText?: string;
  image?: LocalizedImage;
  /** Vertical alignment of the content */
  contentAlignVertical?: VerticalFull;
  /** Horizontal alignment of the media */
  mediaAlignHorizontal?: HorizontalSimple;
  type: string;
};

/**
 * Title
 */
export type M080ContentCarousel = BaseModule & {
  /** Headline */
  headline?: string;
  /** Items */
  items: (ContentCarouselItem | DynamicContentCarouselItem | (ContentCarouselItem & DynamicContentCarouselItem))[];
  /** layout */
  layout?: 'Carousel' | 'List';
  type: string;
};

/**
 * M089RelevantContent
 */
export type M089RelevantContent = BaseModule & {
  /** Headline */
  headline?: string;
  /**
   * Headline display type
   * Defaults to display4 if "none" chosen
   */
  displayType?: 'display1' | 'display2' | 'display3' | 'display4';
  /** Text */
  richText?: string;
  /** Call To Action */
  callToAction?: Link;
  tags?: TagGroup[];
  /** Default sorting */
  defaultSorting?: 'relevance' | 'alphabeticalAsc' | 'alphabeticalDesc';
  /**
   * Enable facets?
   * If enabled, user will be able to filter the results. If enabled this module will also be affected by facets of other M089 instances on the same page.
   */
  enableFacets?: boolean;
  type: string;
};

/**
 * M090QuoteModule
 */
export type M090QuoteModule = BaseModule & {
  /** Author */
  author?: string;
  /** Quote */
  quote: string;
  type: string;
};

/**
 * M100RichTextModule
 */
export type M100RichTextModule = BaseModule & {
  /** Headline */
  headline?: string;
  /**
   * Headline display type
   * Defaults to display4 if "none" chosen
   */
  displayType?: 'display1' | 'display2' | 'display3' | 'display4';
  /** First column */
  richText?: string;
  /** Second column */
  secondaryColumn?: string;
  /**
   * Truncate
   * If checked: Content will be truncated with a 'Show more' button if tall
   */
  truncate?: boolean;
  callToAction?: CallToAction;
  type: string;
};

/**
 * M120AccordionModule
 */
export type M120AccordionModule = BaseModule & {
  /** Headline */
  headline?: string;
  /** Items */
  items?: AccordionItem[];
  type: string;
};

/**
 * Title
 */
export type M140ProductListModule = BaseModule & {
  /** Headline */
  headline?: string;
  tags?: TagGroup[];
  /**
   * Enable species overview
   * If enabled a navigation of all species will be shown in the top of the module. If enabled the user will be required to select a species before any products are shown.
   */
  enableSpeciesOverview?: boolean;
  /**
   * Enable user facets
   * If enabled the user facets will be shown. User facets are the dropdowns and sorting.
   */
  enableUserFacets?: boolean;
  /**
   * Enable pagination
   * If enabled will show next/previous buttons for pagination. If disabled all products will be loaded at once. Use disabled with caution.
   */
  enablePagination?: boolean;
  type: string;
};

/**
 * M200TypeformModule
 * Typeform plugin module
 */
export type M200TypeformModule = BaseModule & {
  /**
   * Typeform id
   * Use the short id in form url e.g. 'IY0Cs81L'.
   */
  typeformId: string;
  /**
   * Form type
   * Choose between form types. You do not need to configure this in Typeform.
   */
  formType: FormTypeDropdown;
  /**
   * Button text
   * Button is shown if 'Form type' is either 'Slider', 'SideTab' or 'Popup'. It's also used for 'Popover', but is only visible to screen readers.
   */
  buttonText?: string;
  /**
   * Minimum height
   * OPTIONAL: Set the minimum height for 'Standard', 'SideTab' or 'Popover'. Default values are used otherwise.
   * @min 0
   */
  minHeight?: number;
  type: string;
};

export interface Market {
  id?: string | null;
  currencyCode?: string | null;
  currencyName?: string | null;
  countryCode?: string | null;
  countryName?: string | null;
  host?: string | null;
  isDefault?: boolean;
  isSelected?: boolean;
  languages?: Language[] | null;
}

export interface Markets {
  availableMarkets?: Market[] | null;
}

export type ModulePageBase = UtilRequiredKeys<PageBase, 'type'> & {
  modules: (
    | M010HeroModule
    | M020CategoriesModule
    | M060UspModule
    | M070ImageModule
    | M071VideoModule
    | M075ImageAndTextModule
    | M080ContentCarousel
    | M090QuoteModule
    | M100RichTextModule
    | M120AccordionModule
    | M140ProductListModule
    | M200TypeformModule
    | M089RelevantContent
    | M021SpeciesList
    | (M010HeroModule &
        M020CategoriesModule &
        M060UspModule &
        M070ImageModule &
        M071VideoModule &
        M075ImageAndTextModule &
        M080ContentCarousel &
        M090QuoteModule &
        M100RichTextModule &
        M120AccordionModule &
        M140ProductListModule &
        M200TypeformModule &
        M089RelevantContent &
        M021SpeciesList)
  )[];
};

export interface NavigationItem {
  node: Link;
  nodes?: NavigationItem[];
}

/**
 * P010SearchPage
 */
export type P010SearchPage = ModulePageBase & {
  type: string;
};

/**
 * Home page
 */
export type P020HomePage = (HomePageBasePage & ModulePageBase) & {
  type: string;
};

/**
 * P050ProductDetailPage
 */
export type P050ProductDetailPage = (ModulePageBase & Product) & {
  type: string;
};

/**
 * P060StandardPage
 * Used to build a standard page
 */
export type P060StandardPage = (PageReference & ModulePageBase) & {
  type: string;
  tags?: TagGroup[];
};

/**
 * P140NotFoundPage
 */
export type P140NotFoundPage = ModulePageBase & {
  type: string;
};

/**
 * P150ErrorPage
 */
export type P150ErrorPage = ModulePageBase & {
  type: string;
};

export interface PageBase {
  type: string;
  breadcrumb?: Breadcrumb;
  hrefLangs?: HrefLangLink[];
  url?: string;
  /** Page title */
  pageTitle?: string;
  meta?: Meta;
  id?: string;
}

export interface RepublishContentTypes {
  schemas?: string[] | null;
  whatIf?: boolean;
}

/**
 * Accordion Item
 */
export interface AccordionItem {
  /** Headline */
  headline?: string;
  /** Rich Text */
  richText?: string;
}

/**
 * autoplay
 * Enable to autoplay video. Video will be muted.
 */
export type Autoplay = boolean;

export interface BaseModule {
  /**
   * Spacing top
   * Spacing above the module. Select "No spacing" to remove spacing completely. Choosing "None" will default to Medium
   */
  spacingTop?: ModuleSpacing;
  /**
   * Spacing bottom
   * Spacing below the module. Select "No spacing" to remove spacing completely. Choosing "None" will default to Medium
   */
  spacingBottom?: ModuleSpacing;
}

export interface BasicVideo {
  title?: string;
  mainThumb?: string;
  media?: VideoItem[];
}

export interface Breadcrumb {
  crumbs: Link[];
}

export interface CallToAction {
  /** Title */
  title?: string;
  /** Url */
  url?: string;
  /**
   * Target
   * Chosing _blank will open link in a new tab.
   */
  target?: '_blank';
  /** Anchor */
  id?: string;
  /** Page reference */
  pageReference?: P020HomePage | P060StandardPage | P010SearchPage | (P020HomePage & P060StandardPage & P010SearchPage);
  /**
   * Variant
   * Defaults to "primary" if "none" chosen
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

/**
 * A category item
 */
export interface CategoryItem {
  /** Title */
  headline?: string;
  /** Image */
  image?: Image;
  /** Call to action */
  callToAction?: Link;
}

/**
 * Concepts
 */
export interface Concepts {
  /** @pattern ^[a-z0-9-]+$ */
  key: string;
  /** Concept title */
  title?: string;
  /**
   * Root page for this concept
   * Link to the page this concept should point to
   */
  parentPage?: Link;
  availableInLocales?: boolean;
}

/**
 * Content Carousel Item
 */
export interface ContentCarouselItem {
  /** Headline */
  headline?: string;
  /** Description */
  description?: string;
  /** Image */
  image?: RequiredImage;
  /** Link */
  callToAction?: Link;
}

/**
 * Title
 */
export interface ContentCarouselItemPageReference {
  /** Used to build a standard page */
  pageReference?: P060StandardPage;
}

/**
 * Title
 */
export interface ContentTag {
  /** @pattern ^[a-z0-9-_]+$ */
  key?: string;
  /** Tag title */
  title?: string;
  /**
   * Root page for this tag if any
   * Link to the page this specie should point to
   */
  callToAction?: SimpleLink;
}

/**
 * Content Carousel Item
 */
export type DynamicContentCarouselItem = PageReferenceItem;

export interface ExtendedVideo {
  video?: BasicVideo;
  /**
   * Video URL
   * Will not be shown if video from library is chosen
   */
  videoUrl?: string;
  /** Thumbnail */
  thumbnail: LocalizedImage;
}

/**
 * Footer
 * The footer of the website
 */
export interface Footer {
  /** Logo */
  logo?: LocalizedImage;
  /** Description column */
  description?: string;
  /** Social media icons */
  icons?: {
    /** Image */
    image?: Image;
    link?: Link;
  }[];
  /** First column headline */
  firstColumnHeadline?: string;
  /** First column */
  firstColumn?: string;
  /** Second column headline */
  secondColumnHeadline?: string;
  /** Second column */
  secondColumn?: string;
  /** Quick links headline */
  quickLinksHeadline?: string;
  /** Quick links */
  quickLinks?: Link[];
}

export interface FormTypeDropdown {
  /**
   * Select form type
   * Choose which type of form you're adding to the page.
   */
  dropdown?: FormTypeEnum;
}

export type FormTypeEnum = 'Standard' | 'Slider' | 'SideTab' | 'Popup' | 'Popover';

/**
 * Site settings
 */
export interface Frame {
  mainMenu?: MainMenuNavigationItem[];
  /** The footer of the website */
  footer?: Footer;
  /**
   * Static links
   * Static Links are used to inform the application where certain static pages are found
   */
  staticLinks?: {
    /** Home Page */
    homePage: string;
    /** Not Found Page */
    notFoundPage: string;
    /** Error Page */
    errorPage: string;
    /** Search Page */
    searchPage: string;
  };
  /**
   * Product details page
   * Global settings for all PDPs
   */
  productDetails?: {
    /**
     * PDP Typeform id
     * For the 'Contact Biomar' button. Use the short id in form url e.g. 'IY0Cs81L'.
     */
    typeformId?: any;
  };
  /**
   * GTM ID
   * ID for Google Tag Manager
   */
  gtmId?: string;
  translationHash?: string;
}

export interface HomePageBasePage {
  /** Page title */
  pageTitle?: string;
  meta?: Meta;
}

/**
 * Horizontal alignment
 */
export type HorizontalFull = 'Left' | 'Center' | 'Right';

/**
 * Horizontal alignment
 */
export type HorizontalSimple = 'Left' | 'Right';

export interface HotSpots {
  hasPolygon: boolean;
  hasPoint: boolean;
  list: HotSpotsItem[];
}

export interface HotSpotsItem {
  selector?: string;
  id?: string;
  type?: string;
  target?: string;
  points?: {
    x?: number;
    y?: number;
  };
}

export interface HrefLangLink {
  url: string;
  culture: string;
}

/**
 * Image
 */
export type Icon = RequiredImage;

export interface Image {
  /** Alt */
  alt?: string;
  src: string;
  width: number;
  height: number;
  type?: string;
  pointOfInterest?: PointOfInterest;
  hotSpots?: HotSpots;
}

/**
 * Species
 */
export interface Lifecycles {
  /** @pattern ^[a-z0-9-]+$ */
  key: string;
  /** Life cycle title */
  title?: string;
  /**
   * Root page for this life cycle
   * Link to the page this life cycle should point to
   */
  parentPage?: Link;
  availableInLocales?: boolean;
}

export interface Link {
  /** Title */
  title?: string;
  /** Url */
  url?: string;
  /**
   * Target
   * Chosing _blank will open link in a new tab.
   */
  target?: '_blank';
}

export type LocalizedImage = Image & {
  /** Alt */
  alt?: string;
};

/**
 * loop
 * Enable to loop video.
 */
export type Loop = boolean;

export interface MainMenuNavigationItem {
  node: Link;
  nodes?: NavigationItem[];
}

/**
 * Seo
 */
export interface Meta {
  /** Canonical Link */
  canonical?: Link;
  /** Meta description */
  description?: string;
  /** Meta title */
  title?: string;
  /** Hide from robots */
  hideFromRobots?: boolean;
}

export type ModuleSpacing = 'No spacing' | 'Small' | 'Medium' | 'Large';

/**
 * Page reference card
 */
export interface PageReference {
  /**
   * Page reference title
   * When this page is referenced, this will be the title of the card.
   */
  pageReferenceTitle?: string;
  /**
   * Page reference description
   * When this page is referenced, this will be the text of the card.
   */
  pageReferenceDescription?: string;
  /**
   * Page reference card image
   * hello
   */
  pageReferenceImage?: LocalizedImage;
}

export type PageReferenceItem = PageReference & {
  type?: string;
  url?: string;
  tags?: TagGroup[];
};

export interface PointOfInterest {
  w: number;
  h: number;
  x: number;
  y: number;
}

/**
 * Title
 */
export interface Product {
  /** Species */
  species?: Species[];
  /** Life cycles */
  lifeCycles?: Lifecycles[];
  /** Concepts */
  concepts?: Concepts[];
  /** Product tags */
  productTags?: ProductTags[];
  /** Product name */
  pageTitle?: string;
  meta?: Meta;
  /**
   * Hide on website
   * Use to disable the product on the website
   */
  hideOnWebsite?: boolean;
  availableInLocales?: boolean;
  /** Hide from plp */
  hideFromPlp?: {
    values?: {
      value?: boolean;
    }[];
  };
  /**
   * Image
   * The first image is the main image
   */
  images?: LocalizedImage[];
  /** Product description */
  productDescription?: string;
  /** Subheadline */
  subheadline?: string;
}

/**
 * Product tags
 * Product tags
 */
export interface ProductTags {
  /** @pattern ^[a-z0-9-]+$ */
  key: string;
  /** Product tag title */
  title?: string;
  /**
   * Root page for this product tag
   * Link to the page this product tag should point to
   */
  parentPage?: Link;
  availableInLocales?: boolean;
}

export type RequiredImage = Image & {
  /** Alt */
  alt?: string;
};

export interface RichTextField {
  richText?: string;
}

export interface RichTextFieldLocalized {
  values?: string;
}

export interface SimpleLink {
  /** Url */
  url?: string;
}

export interface SimpleVideo {
  video?: BasicVideo;
}

/**
 * Species
 */
export interface Species {
  /** @pattern ^[a-z0-9-]+$ */
  key: string;
  /** Specie title */
  title?: string;
  /**
   * Root page for this specie
   * Link to the page this specie should point to
   */
  callToAction?: Link;
  /** Icon */
  thumbnail?: LocalizedImage;
  availableInLocales?: boolean;
}

/**
 * Title
 */
export interface TagGroup {
  /**
   * The unique key for this group
   * @pattern ^[a-z0-9-]+$
   */
  groupKey?: string;
  /**
   * title
   * Displayed in Amplience to easily identify the group
   */
  title?: string;
  tags?: TagValue[];
  availableInLocales?: boolean;
}

export type TagValue = (Species | Concepts | Lifecycles | ContentTag | ProductTags | (Species & Concepts & Lifecycles & ContentTag & ProductTags)) & {
  id?: string;
};

/**
 * Title
 */
export type Title = any;

/**
 * Usp Item
 */
export interface UspItem {
  /** Headline */
  headline?: string;
  /** Text */
  text?: string;
  /** Image */
  image?: Image;
  callToAction?: Link;
}

/**
 * Vertical alignment
 */
export type VerticalFull = 'Top' | 'Center' | 'Bottom';

/**
 * Vertical alignment
 */
export type VerticalSimple = 'Top' | 'Bottom';

export interface VideoItem {
  src?: string;
  profile?: string;
  width?: number;
  height?: number;
  format?: string;
}

export interface VideoSettings {
  autoplay?: Autoplay;
  loop?: Loop;
}

export interface AutomatedtestConfigDetailParams {
  /** @format int32 */
  countPerSchema?: number;
  spaceId: string;
  culture: string;
}

export interface ContentPageDetailParams {
  path?: string;
  spaceId: string;
  culture: string;
}

export interface ContentPageFromsourceDetailParams {
  path?: string;
  spaceId: string;
  culture: string;
}

export interface GlobalizationRedirectsUploadCreatePayload {
  /** @format binary */
  file?: File;
}

export interface GlobalizationRedirectsUploadCreateParams {
  replaceExistingRedirects?: boolean;
  whatIf?: boolean;
  spaceId: string;
  culture: string;
}

export interface GlobalizationRedirectsSingleDetailParams {
  source?: string;
  spaceId: string;
  culture: string;
}

export type Modules =
  | M010HeroModule
  | M020CategoriesModule
  | M021SpeciesList
  | M060UspModule
  | M070ImageModule
  | M071VideoModule
  | M075ImageAndTextModule
  | M080ContentCarousel
  | M089RelevantContent
  | M090QuoteModule
  | M100RichTextModule
  | M120AccordionModule
  | M140ProductListModule
  | M200TypeformModule
  | (M010HeroModule &
      M020CategoriesModule &
      M021SpeciesList &
      M060UspModule &
      M070ImageModule &
      M071VideoModule &
      M075ImageAndTextModule &
      M080ContentCarousel &
      M089RelevantContent &
      M090QuoteModule &
      M100RichTextModule &
      M120AccordionModule &
      M140ProductListModule &
      M200TypeformModule);

export type ModulesAsKeys =
  | 'M010HeroModule'
  | 'M020CategoriesModule'
  | 'M021SpeciesList'
  | 'M060UspModule'
  | 'M070ImageModule'
  | 'M071VideoModule'
  | 'M075ImageAndTextModule'
  | 'M080ContentCarousel'
  | 'M089RelevantContent'
  | 'M090QuoteModule'
  | 'M100RichTextModule'
  | 'M120AccordionModule'
  | 'M140ProductListModule'
  | 'M200TypeformModule';

export type Pages =
  | P010SearchPage
  | P020HomePage
  | P050ProductDetailPage
  | P060StandardPage
  | P140NotFoundPage
  | P150ErrorPage
  | (P010SearchPage & P020HomePage & P050ProductDetailPage & P060StandardPage & P140NotFoundPage & P150ErrorPage);

export type PagesAsKeys = 'P010SearchPage' | 'P020HomePage' | 'P050ProductDetailPage' | 'P060StandardPage' | 'P140NotFoundPage' | 'P150ErrorPage';
