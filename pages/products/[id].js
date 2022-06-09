import { useRouter } from "next/router";

const Product = () => {
    const router = useRouter();
    // { id }と書くことでrouter.queryのidを取ってこれる
    const { id } = router.query
    // smartphone,pc,headphoneなどを取ってくる
    console.log(router.query.id);
    return <div>{id}</div>;
};

export default Product;