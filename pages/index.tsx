import Layout from '../src/components/Layout';
import {SearchMember} from "../src/components/molecules";
import {TableMenber}from "../src/components/organisms"
const IndexPage = () => (
  <Layout title="Home">
    <div className={"container"}>
      <h1 className="text-3xl font-bold underline">
        Hello from the Home page 👋 !
      </h1>
      <div>
        <SearchMember/>
      </div>
      <div>
        <TableMenber row={3} column={3}/>
      </div>
    </div>
  </Layout>
)

export default IndexPage;
