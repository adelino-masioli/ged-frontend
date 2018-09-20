import './DataTableHeader.css'
import React from 'react'
import Box from '../templates/Box'
import BoxHeader from '../templates/BoxHeader'
import BoxBody from '../templates/BoxBody'
import DataTableHeader from './DataTableHeader'
import DataTableBody from './DataTableBody'
import DataTableFooter from './DataTableFooter'

export default props =>
    <aside>
        <Box>
            <BoxHeader>{props.boxHeader}</BoxHeader>
            <BoxBody>
                <table className="table table-condensed table-bordered table-hover table-striped">
                    <DataTableHeader headerTitle={props.headerTitle}/>
                    <DataTableBody/>
                    <DataTableFooter/>
                </table>
            </BoxBody>
        </Box>
    </aside>
