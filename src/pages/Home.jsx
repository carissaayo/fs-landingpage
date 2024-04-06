import { useCallback, useEffect } from "react";

import HowItWorks from "../components/HomeComponents/HowItWorksComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUsComponents/AboutUs";
import Testimonial from "../components/HomeComponents/TestimonialComponents/Testimonial";
import FAQs from "../components/HomeComponents/FAQsComponents/FAQs";
import Hero from "../components/HomeComponents/HeroComponents/Hero";
import SellForm from "../components/HomeComponents/SellComponents/SellForm";
import axiosClient from "../lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBrandsAndModelsStore } from "../store/sell/brandsAndModelsStore";
import toast from "react-hot-toast";
import { useLocationStore } from "../store/sell/locationsStore";

const Home = () => {
  const queryClient = useQueryClient();

  // Brands and Models States
  const setLoading = useBrandsAndModelsStore((state) => state.setLoading);
  const setBrands = useBrandsAndModelsStore((state) => state.setBrands);
  const setModels = useBrandsAndModelsStore((state) => state.setModels);
  const setPhoneConditions = useBrandsAndModelsStore(
    (state) => state.setPhoneConditions
  );

  // Location States
  const setLocationLoading = useLocationStore((state) => state.setLoading);
  const setStates = useLocationStore((state) => state.setStates);
  const setCities = useLocationStore((state) => state.setCities);

  const fetchBrandsAndModels = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/data/brand-and-models`)
      .then((response) => {
        console.log(response);
        setBrands(response.data.data.brands);
        setModels(response.data.data.models);
        setPhoneConditions(response.data.data.phoneCondition);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);

  const { mutate: fetchBrandsAndModelsFn } = useMutation({
    mutationFn: () => fetchBrandsAndModels(),
  });
  const fetchLocations = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/data/procurement-locations`)
      .then((response) => {
        // console.log(response);
        setStates(response.data.data.state);
        setCities(response.data.data.city);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);

  const { mutate: fetchLocationsFn } = useMutation({
    mutationFn: () => fetchLocations(),
  });
  useEffect(() => {
    fetchLocationsFn();
    fetchBrandsAndModelsFn();
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => goToTop(), []);

  return (
    <main className="w-full h-full relative ">
      <div className="pt-[80px]">
        <Hero />
      </div>
      <section id="sell" className="relative w-full px-6 md:px-32 ">
        <SellForm />
      </section>

      <HowItWorks />

      <AboutUs />
      <Testimonial />
      <FAQs />
    </main>
  );
};

export default Home;
