import React from 'react';
import { Flex, Progress } from 'antd';

const CaseStatus: React.FC = () => (
  <div className="sm:px-7.5 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark col-span-12">
    <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Five Cases
      </h4>

 <Flex gap="small" vertical>
   <div>
    <h4>Case A</h4>
   <Progress percent={100} percentPosition={{ align: 'center', type: 'inner', }} size={[1230, 20]} />
   </div>
    <div>
    <h4>Case B</h4>
    <Progress percent={80} percentPosition={{ align: 'center', type: 'inner', }} size={[1230, 20]} />
    </div>
    <div>
    <h4>Case C</h4>
    <Progress percent={60} percentPosition={{ align: 'center', type: 'inner', }} size={[1230, 20]} />
    </div>
    <div>
    <h4>Case D</h4>
    <Progress percent={40} percentPosition={{ align: 'center', type: 'inner', }} size={[1230, 20]} />
    </div>
    <div>
    <h4>Case E</h4>
    <Progress percent={20} percentPosition={{ align: 'center', type: 'inner', }} size={[1230, 20]} />
    </div>
  </Flex>
  </div>
 
);

export default CaseStatus;