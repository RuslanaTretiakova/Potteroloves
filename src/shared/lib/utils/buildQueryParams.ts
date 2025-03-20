import { IFetchParams } from '@/shared/api/potterApi/types';

export const buildQueryParams = ({
  search,
  page,
  max,
}: IFetchParams): string => {
  const queryParams = new URLSearchParams();

  if (search) queryParams.append('search', search);
  if (page) queryParams.append('page', String(page));
  if (max) queryParams.append('max', String(max));

  return queryParams.toString();
};
