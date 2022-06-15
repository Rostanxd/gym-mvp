import Layout from '../src/components/Layout';
import {SearchMember} from "../src/components/molecules";

const IndexPage = () => (
  <Layout title="Home">
    <div className={"container"}>
      <h1 className="text-3xl font-bold underline">
        Hello from the Home page 👋 !
      </h1>
      <div>
        <SearchMember/>
      </div>
    </div>
  </Layout>
)

export default IndexPage;
