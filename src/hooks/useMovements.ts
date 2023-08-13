import {useEffect, useState} from 'react';
import {
  MovementsResponse,
  MovementsSection,
} from '../models/movement/MovementResponse';
import useFetch from './useFetch';

const useMovements = (filter: 'history' | 'earned' | 'used') => {
  const controller = new AbortController();

  const [movements, setMovements] = useState<MovementsSection[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [moreData, setMoreData] = useState(true);

  const {fetchData} = useFetch<MovementsResponse>();

  const getMovements = () => {
    setLoading(true);

    setTimeout(() => {
      fetchData(`${filter}?_sort=id&_order=desc&_page=${page}&_limit=1`)
        .then((response: any) => {

          const result = response[0];
          setMovements([...movements, ...(result.data as any)]);
          setPage(page + 1);

          if (result!.data?.length == 0) setMoreData(false);
        })
        .catch(err => setMoreData(false))
        .finally(() => setLoading(false));
    }, 2000);
  };

  useEffect(() => {
    getMovements();

    return controller.abort();
  }, []);

  return {movements, loading, moreData, getMovements};
};

export default useMovements;
