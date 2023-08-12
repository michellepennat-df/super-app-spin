import {useEffect, useState} from 'react';
import {Partner} from '../models/partner/Partner';
import {PartnerResponse} from '../models/partner/PartnerResponse';
import useFetch from './useFetch';

const usePartners = () => {
  const controller = new AbortController();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);

  const {fetchData} = useFetch<PartnerResponse>();

  const getPartners = () => {
    setLoading(true);

    setTimeout(() => {
      fetchData(`partners`)
        .then((response: any) => {
          setPartners([...response]);
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }, 2000);
  };

  useEffect(() => {
    getPartners();

    return controller.abort();
  }, []);

  return {
    partners,
    loading,
    getPartners,
  };
};

export default usePartners;
