import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import { gql, useQuery } from '@apollo/client';
import { MDBDataTableV5 } from 'mdbreact';

const epoches_query = gql`
  query MyQuery {
    epoches(orderBy: startBlock) {
      queryFeeRebates
      queryFeesCollected
      signalledTokens
      stakeDeposited
      startBlock
      taxedQueryFees
      totalDelegatorRewards
      totalIndexerRewards
      totalQueryFees
      totalRewards
      curatorQueryFees
      endBlock
    }
  }
`;

function GetEpoches() {
  const columns = [
    {
      label: 'Start Block',
      field: 'startBlock',
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'startBlock',
      },
    },
    {
      label: 'End Block',
      field: 'endBlock',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'endBlock',
      },
    },
    {
      label: 'Query Fee Rebates',
      field: 'queryFeeRebates',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'queryFeeRebates',
      },
    },
    {
      label: 'Query Fees Collected',
      field: 'queryFeesCollected',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'queryFeesCollected',
      },
    },
    {
      label: 'Signalled Tokens',
      field: 'signalledTokens',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'signalledTokens',
      },
    },
    {
      label: 'Stake Deposited',
      field: 'stakeDeposited',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'stakeDeposited',
      },
    },
    
    {
      label: 'Taxed Query Fees',
      field: 'taxedQueryFees',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'taxedQueryFees',
      },
    },
    {
      label: 'Total Deleagator Rewards',
      field: 'totalDelegatorRewards',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'totalDelegatorRewards',
      },
    },
    {
      label: 'Total Indexer Rewards',
      field: 'totalIndexerRewards',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'totalIndexerRewards',
      },
    },
    {
      label: 'Total Query Fees',
      field: 'totalQueryFees',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'totalQueryFees',
      },
    },
    {
      label: 'Total Rewards',
      field: 'totalRewards',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'totalRewards',
      },
    },
    {
      label: 'Curator Query Fees',
      field: 'curatorQueryFees',
      searchable: false,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'curatorQueryFees',
      },
    },
   
  ]
  const { loading, error, data } = useQuery(epoches_query);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  var epoches = data.epoches.map((epoch) => ({
    id: epoch.id,
    queryFeeRebates: parseFloat(epoch.queryFeeRebates / (10 ** 18)).toFixed(5) + 'x10^18',
    queryFeesCollected: parseFloat(epoch.queryFeesCollected / (10 ** 18)).toFixed(5) + 'x10^18',
    signalledTokens: parseFloat(epoch.signalledTokens / (10 ** 18)).toFixed(5) + 'x10^18',
    stakeDeposited: parseFloat(epoch.stakeDeposited / (10 ** 18)).toFixed(5) + 'x10^18',
    startBlock: epoch.startBlock,
    taxedQueryFees: parseFloat(epoch.taxedQueryFees / (10 ** 18)).toFixed(5) + 'x10^18',
    totalDelegatorRewards: parseFloat(epoch.totalDelegatorRewards / (10 ** 18)).toFixed(5)+ 'x10^18',
    totalIndexerRewards: parseFloat(epoch.totalIndexerRewards / (10 ** 18)).toFixed(5)+ 'x10^18',
    totalQueryFees: parseFloat(epoch.totalQueryFees / (10 ** 18)).toFixed(5)+ 'x10^18',
    totalRewards: parseFloat(epoch.totalRewards / (10 ** 18)).toFixed(5)+ 'x10^18',
    curatorQueryFees: parseFloat(epoch.curatorQueryFees / (10 ** 18)).toFixed(5)+ 'x10^18',
    endBlock: epoch.endBlock
  }));

  var datatable = { columns: columns, rows: epoches };
  return <MDBDataTableV5 maxHeight='50vh'  entries={20}  data={datatable} />
}

function App() {

      return (
        <div className="App">
          <header className="App-header">
            <h2 >Epoches</h2>
            <div className='App-body'>
              <GetEpoches />
            </div>
          </header>
        </div>
      );

    }

export default App;
