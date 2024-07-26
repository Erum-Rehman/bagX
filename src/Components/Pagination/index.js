import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ productsPerPage, totalProducts, paginate }) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (event, pageNumber) => {
        paginate(pageNumber);
    };

    return (
        <Stack spacing={2} className="pagination-body">
            <Pagination count={totalPages} onChange={handlePageChange} shape="rounded" />
        </Stack>
    );
}
