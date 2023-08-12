import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text">Discover New Thoughts 
        <br className="max-md:hidden"/>
        <span className="orange_gradient">Daily Quotes</span>
        </h1>
        <p className="desc text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet iure iusto, cum dignissimos et nesciunt porro repudiandae dolore obcaecati in esse minus voluptate reprehenderit cupiditate accusamus dicta hic neque fugiat perferendis itaque illo. Ullam, saepe.</p>
    <Feed/>
    </section>
  )
}

export default Home