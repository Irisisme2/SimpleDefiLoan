// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoanContract {
    // Struktura reprezentująca pojedynczy wniosek o pożyczkę
    struct LoanRequest {
        address borrower;
        string name;
        uint256 amount;
        string currency;
        uint256 repaymentDate;
        bool isApproved;
    }

    // Tablica przechowująca wszystkie wnioski o pożyczkę
    LoanRequest[] public loanRequests;

    // Funkcja umożliwiająca składanie wniosków o pożyczkę
    function applyForLoan(
        string memory _name,
        uint256 _amount,
        string memory _currency,
        uint256 _repaymentDate
    ) external {
        LoanRequest memory newLoanRequest = LoanRequest({
            borrower: msg.sender,
            name: _name,
            amount: _amount,
            currency: _currency,
            repaymentDate: _repaymentDate,
            isApproved: false
        });
        loanRequests.push(newLoanRequest);
    }

    // Funkcja umożliwiająca przetwarzanie wniosków o pożyczkę
    function processLoanRequest(uint256 _index, bool _isApproved) external {
        require(_index < loanRequests.length, "Invalid loan request index");
        loanRequests[_index].isApproved = _isApproved;
    }

    // Funkcja umożliwiająca pobieranie informacji o istniejących pożyczkach
    function getLoanRequest(uint256 _index) external view returns (address, string memory, uint256, string memory, uint256, bool) {
        require(_index < loanRequests.length, "Invalid loan request index");
        LoanRequest memory request = loanRequests[_index];
        return (
            request.borrower,
            request.name,
            request.amount,
            request.currency,
            request.repaymentDate,
            request.isApproved
        );
    }

    // Funkcja zwracająca liczbę wniosków o pożyczkę
    function getLoanRequestCount() external view returns (uint256) {
        return loanRequests.length;
    }
}
