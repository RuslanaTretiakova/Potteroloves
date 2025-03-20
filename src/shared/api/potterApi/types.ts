export type ResourceType = 'books' | 'characters' | 'houses' | 'spells';

export interface IFetchParams {
  resource?: ResourceType;
  lang?: string;
  search?: string;
  random?: boolean;
  page?: number;
  max?: number;
}
