interface Use {
  id: string;
  scrollIntoView: () => void;
}

type UseScroll<T extends Use> = {
  references: React.RefObject<T>[];
  hash: string;
};

export const useScroll = <T extends Use>({
  references,
  hash,
}: UseScroll<T>) => {
  const scrollView = () => {
    for (const ref of references) {
      if (ref.current?.id === hash) ref.current?.scrollIntoView();
    }
  };

  return [scrollView];
};
