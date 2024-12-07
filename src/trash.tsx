// const Mounted = () => {
//     useEffect(() => {
//       const timeout = setTimeout(() => {
//         console.log("Component is mounted after 5 seconds");
//       }, 5000);

//       // before the dom is mounted
//       // if the component is unmounted
//       // useEffect override
//       return () => {
//         clearTimeout(timeout);
//       };
//     }, []);
//     return <div>Mounted</div>;
//   };

// {state === "mounted" && (
//     <div>
//       <div>Showing mounted</div>
//       <Mounted />
//     </div>
//   )}
//   <button
//     className="bg-primary p-2 rounded"
//     onClick={() => setState("mounted")}
//   >
//     Mount
//   </button>
//   <button
//     className="bg-primary p-2 mr-2 rounded"
//     onClick={() => setState("unmounted")}
//   >
//     Unmount
//   </button>

// const [state, setState] = useState("mounted");
