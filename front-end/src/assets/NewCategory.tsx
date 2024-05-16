interface NewCategoryProps {
  className?: string;
  onClick?: () => void;
  title: string;
}

function NewCategory(props: NewCategoryProps) {
  return (
    <div title={props.title}>
      <svg
        onClick={props.onClick}
        width={16}
        height={16}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        {...props}
      >
        <path
          d="M17 34C7.6 34 0 26.4 0 17S7.6 0 17 0s17 7.6 17 17-7.6 17-17 17zm0-32C8.7 2 2 8.7 2 17s6.7 15 15 15 15-6.7 15-15S25.3 2 17 2z"
          fill="#ffffff"
        />
        <path d="M8 16h18v2H8v-2z" fill="#ffffff" />
        <path d="M16 8h2v18h-2V8z" fill="#ffffff" />
      </svg>
    </div>
  );
}

export default NewCategory;
