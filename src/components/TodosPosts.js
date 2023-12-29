import "../style/todospostsStyle.css";
import Card from "./Card";
import { useEffect } from "react";

function TodosPosts({ posts, getPosts }) {
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div id="todaspostagens">
            <div className="posts">
                {posts.slice().reverse().map((post) => (
                    <Card post={post} key={post.titulo} />
                ))}
            </div>
        </div>
    );
}

export default TodosPosts;
